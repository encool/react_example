package com.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.rest.service.IRESTService;
import com.example.rest.service.TaskRestService;
import com.example.rest.service.consts.RESTConstant;

@Controller
@RequestMapping("api")
public class RESTController {
	
	@Autowired
	TaskRestService taskRestService;
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@ResponseBody
	@RequestMapping(value = "/{entity}/", method = RequestMethod.GET)
	public ResponseEntity<List<Object>> getListDate(@PathVariable String entity){
		IRESTService service = getRESTService(entity);
		Map<String, Object> context = new HashMap();
		context.put(RESTConstant.ENTITY_NAME, entity);
		return new ResponseEntity(service.getElements(context),HttpStatus.OK);			
	}

    //-------------------Retrieve Single Entity--------------------------------------------------------
    
    @SuppressWarnings("rawtypes")
	@RequestMapping(value = "/{entity}/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> getUser(@PathVariable String entity,@PathVariable("id") String id) {
    	IRESTService service = getRESTService(entity);
    	Object o = service.getElementById(id);
        return new ResponseEntity(o, HttpStatus.OK);
    }	
	
	@SuppressWarnings("rawtypes")
	private IRESTService getRESTService(String entity){
		return taskRestService;
	}
}
