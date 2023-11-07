package com.poscodx.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.emaillist.dto.JsonResult;
import com.poscodx.emaillist.repository.EmaillistRepository;
import com.poscodx.emaillist.vo.EmaillistVo;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class ApiController {
	@Autowired
	private EmaillistRepository emaillistRepository;

	@GetMapping("/api")
	public ResponseEntity<JsonResult> read() {
		log.info("REquest[GET /api]");
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(emaillistRepository.findAll()));
	}

	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
		log.info("REquest[POST /api]: " + vo);
		emaillistRepository.insert(vo);

		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
	}
}
