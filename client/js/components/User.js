const User = {
    template: `
        <div class="container">
            <div v-if="current.user">
                <form>
                    <div class="form-group">
                        <label for="user-form-id">ID</label>
                        <label id="user-form-id">{{ current.user.id }}</label>
                    </div>
                    <div class="form-group">
                        <label for="user-form-username">User Name</label>
                        <input type="text" class="form-control" id="user-form-username" placeholder="Username" v-model="current.user.username">
                    </div>
                    <div class="form-group">
                        <label for="user-form-nick">Nick Name</label>
                        <input type="text" class="form-control" id="user-form-nick" placeholder="Nick Name" v-model="current.user.nickName">
                    </div>
                    <div class="form-group">
                        <label for="user-form-email">Email address</label>
                        <input type="email" class="form-control" id="user-form-email" placeholder="Email" v-model="current.user.email">
                    </div>
                    <div class="form-group">
                        <label for="user-form-create">Created Time</label>
                        <label id="user-form-create">{{ current.user.createTime }}</label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" v-model="current.user.enable"> Enable
                        </label>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default" type="button" v-on:click="save">Save</button>
                    </div>
                </form>
            </div>
            <button class="btn btn-default" type="button" v-on:click="create">Create</button>
            <table class="table table-striped" id="user-table">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Nick Name</th>
                        <th>Email</th>
                        <th>Created Time</th>
                        <th>Enable</th>
                        <th></th>
                    </tr>
                    <tr v-for="user in users">
                        <td>{{ user.id }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.nickName }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.createTime }}</td>
                        <td>{{ user.enable }}</td>
                        <td>
                            <button v-on:click="select(user.id)">Update</button>
                            <button v-on:click="remove(user.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    data: function(){
        var users = [
            /* { id: '1', username: 'test1', nickName:'T1', email:'test1@test.com', createTime:new Date('2020-03-08'), enable: true },
            { id: '2', username: 'test2', nickName:'T2', email:'test1@test.com', createTime:new Date('2020-03-08'), enable: true },
            { id: '3', username: 'test3', nickName:'T3', email:'test1@test.com', createTime:new Date('2020-03-08'), enable: true },
            { id: '4', username: 'test4', nickName:'T4', email:'test1@test.com', createTime:new Date('2020-03-08'), enable: true },
            { id: '5', username: 'test5', nickName:'T5', email:'test1@test.com', createTime:new Date('2020-03-08'), enable: true } */
        ]
        axios.get('/users').then(function(response){
            users.concat(response.data.users);
        }).catch(function(error){
            console.error( error );
        });
        return {
            users: users,
            current : { user: null }
        };
    },
    methods: {
        create: function(){
            this.current.user = { username: '', nickName:'', email:'', createTime:new Date(), enable: true };
            axios.post('/users', this.current.user).then(function(response){
                if( response.status === 200 ){
                    this.current.user.id = response.data.id;
                }
            }).catch(function(error){
                console.error( error );
            });
        },
        select: function(userId){
            for ( var i in this.users ) {
                if ( this.users[i].id === userId ) {
                   this.current.user = this.users[i];
                }
            }
        },
        remove: function(userId){
            if( confirm('Are you sure?') ){
                for ( var i in this.users ) {
                    if ( this.users[i].id === userId ) {
                        axios.delete('/users/'+userId).then(function(response){
                            if( response.status === 200 ){
                                 this.users.splice( i, 1 );
                            }
                        }).catch(function(error){
                            console.error( error );
                        });
                    }
                }
            }
        },
        save: function(usreId){
            axios.update('/users/'+userId, this.current.user).then(function(response){
                if( response.status === 200 ){
                    this.users.push( this.current.user );
                    alert('Success');
                }
            }).catch(function(error){
                console.error( error );
            });
        }
    }
}

function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

