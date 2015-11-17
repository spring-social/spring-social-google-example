package org.springframework.social.example.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.Date;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.calendar.Calendar;
import org.springframework.social.google.api.calendar.CalendarPage;
import org.springframework.social.google.api.calendar.Event;
import org.springframework.social.google.api.calendar.EventPage;
import org.springframework.social.google.api.calendar.OrderBy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/calendar")
public class CalendarController {
	@SuppressWarnings("unused")
	private final static Log logger = LogFactory.getLog(CalendarController.class);

	private final Google google;

	@Autowired
	public CalendarController(Google google) {
		this.google = google;
	}
	
	@ResponseBody
	@RequestMapping(value="/list", method=GET)
	public CalendarPage listCalendars(@RequestParam(required=false) String pageToken) {
		return google.calendarOperations().calendarListQuery()
				.fromPage(pageToken)
				.getPage();
	}
	
	@ResponseBody
	@RequestMapping(value="/{calendarId}/view", method=GET)
	public Calendar getCalendar(@PathVariable String calendarId) {
		return google.calendarOperations().getCalendar(calendarId);
	}
	
	@ResponseBody
	@RequestMapping(value="/{calendarId}/events", method=GET)
	public EventPage listEvents(@PathVariable String calendarId,
			@RequestParam(required=false) String pageToken,
			@RequestParam(required=false) Long timeMax,
			@RequestParam(required=false) Long timeMin) {
		EventPage page = google.calendarOperations().eventListQuery(calendarId)
				.fromPage(pageToken)
				.timeMax(timeMax == null ? null : new Date(timeMax))
				.timeMin(timeMin == null ? null : new Date(timeMin))
				.orderBy(OrderBy.START_TIME)
				.singleEvents(true)
				.getPage();
		return page;
	}
	
	@ResponseBody
	@RequestMapping(value="/{calendarId}/events/{eventId}/view", method=GET)
	public Event getEvent(@PathVariable String calendarId, @PathVariable String eventId) {
		return google.calendarOperations().getEvent(calendarId, eventId);
	}
	
	@ResponseBody
	@RequestMapping(value="/{calendarId}/events/create", method=GET)
	public Event createEvent(@PathVariable String calendarId,
			@RequestParam(required=true) String specification, 
			@RequestParam(required=false) Boolean sendNotifications) {
		return google.calendarOperations().quickAddEvent(calendarId, specification, (sendNotifications != null && sendNotifications));
	}

	@ResponseBody
	@RequestMapping(value="/{calendarId}/events/{eventId}/delete", method=POST)
	public void deleteEvent(@PathVariable String calendarId,
			@PathVariable String eventId, 
			@RequestParam(required=false) Boolean sendNotifications) {
		google.calendarOperations().deleteEvent(calendarId, eventId, (sendNotifications != null && sendNotifications));
	}
}
