package org.springframework.social.example.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.tasks.Task;
import org.springframework.social.google.api.tasks.TaskList;
import org.springframework.social.google.api.tasks.TaskListsPage;
import org.springframework.social.google.api.tasks.TasksPage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
@RequestMapping("/tasks")
public class TasksController {

	private final Google google;

	@Autowired
	public TasksController(Google google) {
		this.google = google;
	}
	
	@ResponseBody
	@RequestMapping(value="/list", method=GET)
	public TaskListsPage getTaskLists(@RequestParam(required=false) String pageToken) {
		return google.taskOperations().getTaskLists(pageToken);
	}
	
	@ResponseBody
	@RequestMapping(value="/{taskListId}/view", method=GET)
	public TaskList getTaskList(@PathVariable String taskListId) {
		return google.taskOperations().getTaskList(taskListId);
	}
	
	@ResponseBody
	@RequestMapping(value="/save", method=POST)
	public void saveTaskList(@RequestBody TaskList taskList) {
		google.taskOperations().saveTaskList(taskList);
	}
	
	@ResponseBody
	@RequestMapping(value="/{taskListId}/delete", method=POST)
	public void deleteTaskList(@PathVariable String taskListId) {
		google.taskOperations().deleteTaskList(taskListId);
	}
	
	@ResponseBody
	@RequestMapping(value="/{taskListId}/tasks", method=GET)
	public TasksPage getTasks(@PathVariable String taskListId, @RequestParam(required=false) String pageToken, 
			@RequestParam(required=false) Date dueMin, @RequestParam(required=false) Date dueMax,
			@RequestParam(required=false) Date completedMin, @RequestParam(required=false) Date completedMax,
			@RequestParam(required=false) Date updatedMin, @RequestParam(required=false) boolean includeHidden,
			@RequestParam(required=false) boolean includeCompleted, @RequestParam(required=false) boolean includeDeleted) {
		return google.taskOperations().taskQuery()
				.fromTaskList(taskListId)
				.fromPage(pageToken)
				.dueFrom(dueMin)
				.dueUntil(dueMax)
				.completedFrom(completedMin)
				.completedUntil(completedMax)
				.updatedFrom(updatedMin)
				.includeCompleted(includeCompleted)
				.includeHidden(includeHidden)
				.includeDeleted(includeDeleted)
				.getPage();
	}
	
	@ResponseBody
	@RequestMapping(value="/{taskListId}/tasks/{taskId}/view", method=GET)
	public Task getTask(@PathVariable String taskListId, @PathVariable String taskId) {
		return google.taskOperations().getTask(taskListId, taskId);
	}
	
	@ResponseBody
	@RequestMapping(value="/{taskListId}/tasks/save", method=POST)
	public void saveTask(@PathVariable String taskListId, @RequestBody Task task) {
		google.taskOperations().saveTask(taskListId, task);
	}
	
	@ResponseBody
	@RequestMapping(value="/{taskListId}/tasks/{taskId}/delete", method=POST) 
	public void deleteTask(@PathVariable String taskListId, @PathVariable String taskId) {
		google.taskOperations().deleteTask(taskListId, taskId);
	}
}
