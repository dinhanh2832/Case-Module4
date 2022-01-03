package com.example.demo.service;

import com.example.demo.model.Home;

import java.util.List;

public interface HomeService extends GeneralService<Home>{
    List<Home> findAllByNameContaining(String name);
}
