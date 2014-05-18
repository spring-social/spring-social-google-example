package org.springframework.social.quickstart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.userinfo.GoogleUserInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
public class UserInfoController {

	private final Google google;
	
	@Autowired
	public UserInfoController(Google google) {
		this.google = google;
	}
	
	@ResponseBody
	@RequestMapping(value="/profile", method=GET)
	public GoogleUserInfo getProfile() {
		return google.userOperations().getUserInfo();
	}
}
