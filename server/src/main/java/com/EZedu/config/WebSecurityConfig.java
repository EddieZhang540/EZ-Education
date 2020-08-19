package com.EZedu.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
//            .authorizeRequests()
//            .mvcMatchers("/login").permitAll()
//            .anyRequest().fullyAuthenticated()
//            .and()
//            .formLogin()
//            .successHandler(new AuthenticationSuccessHandler(){
//                @Override
//                public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//
//                }
//            })
//            .failureHandler(new AuthenticationFailureHandler(){
//                @Override
//                public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
//
//                }
//            })
//            .and()
//            .logout().logoutSuccessHandler(new LogoutSuccessHandler() {
//                @Override
//                public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//
//                }
//            })
//            .and()
//            .exceptionHandling()
//            .authenticationEntryPoint(new AuthenticationEntryPoint(){
//                @Override
//                public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
//
//                }
//            });
    }
}
