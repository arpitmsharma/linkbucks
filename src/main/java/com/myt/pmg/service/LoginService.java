package com.myt.pmg.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class LoginService implements UserDetailsService {

	private UserService userService;

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public UserDetails loadUserByUsername(String email)
			throws UsernameNotFoundException {
		com.myt.pmg.persistence.model.User user = userService.findByEmail(email);

		if (user == null)
			throw new UsernameNotFoundException("Oops!");

		List<SimpleGrantedAuthority> authorities = new ArrayList<SimpleGrantedAuthority>();
		for (String role : user.getRole()) {
			authorities.add(new SimpleGrantedAuthority(role));
		}
		return new User(user.getUsername(), user.getPassword(),
				user.isActive(), (!user.isBanned()), true, true, authorities);
	}

}
