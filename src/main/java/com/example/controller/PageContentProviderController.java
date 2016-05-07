package com.example.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.page.PageContentProvider;
import com.example.page.TaskPageProvider;
import com.example.rest.service.consts.RESTConstant;

@Controller
@RequestMapping("list")
public class PageContentProviderController {
	
	@Autowired
	TaskPageProvider taskPageProvider;
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@ResponseBody
	@RequestMapping(value = "/{entity}/", method = RequestMethod.GET)
	public ResponseEntity<Object> getPage(@PathVariable String entity){
		PageContentProvider service = getPageProvider(entity);
		Map<String, Object> context = new HashMap();
		context.put(RESTConstant.ENTITY_NAME, entity);
		return new ResponseEntity(service.getPageElement(context),HttpStatus.OK);			
	}

	@SuppressWarnings("rawtypes")
	private PageContentProvider getPageProvider(String entity) {
		// TODO Auto-generated method stub
		return taskPageProvider;
	}
}
