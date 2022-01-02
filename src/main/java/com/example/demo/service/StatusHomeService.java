package com.example.demo.service;

import com.example.demo.model.StatusHome;

import java.util.Optional;

public interface StatusHomeService extends GeneralService<StatusHome> {
    StatusHome findByName(String name);
}
