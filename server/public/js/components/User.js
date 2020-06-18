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
                        <input type="text" class="form-control" id="user-form-nick" placeholder="Nick Name" v-model="current.user.nickname">
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
                            <input type="checkbox" v-model="current.user.enabled"> Enable
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
                        <td>{{ user.nickname }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.createTime }}</td>
                        <td>{{ user.enabled }}</td>
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
            /* { id: '1', username: 'test1', nickName:'T1', email:'test1@test.com', createTime:new Date('2020-03-08'), enabled: true },
            { id: '2', username: 'test2', nickName:'T2', email:'test1@test.com', createTime:new Date('2020-03-08'), enabled: true },
            { id: '3', username: 'test3', nickName:'T3', email:'test1@test.com', createTime:new Date('2020-03-08'), enabled: true },
            { id: '4', username: 'test4', nickName:'T4', email:'test1@test.com', createTime:new Date('2020-03-08'), enabled: true },
            { id: '5', username: 'test5', nickName:'T5', email:'test1@test.com', createTime:new Date('2020-03-08'), enabled: true } */
        ]
        axios.get('/user').then(function(response){
            response.data.forEach((each)=>{
                users.push(each);
            });
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
            this.current.user = { username: '', nickname:'', email:'', createTime:new Date(), enabled: true };
            axios.post('/user', this.current.user).then((response)=>{
                if( response.status === 200 ){
                    this.current.user = response.data.model;
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
                        axios.delete('/user/'+userId).then((response)=>{
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
        save: function(userId){
            axios.put('/user', this.current.user).then((response)=>{
                if( response.status === 200 ){
                    alert(response.data.result);
                    var exist = false;
                    for ( var i in this.users ) {
                        if ( this.users[i].id === userId ) {
                           exist = true;
                        }
                    }
                    if(!exist){
                        this.users.push(this.current.user);
                    }
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

