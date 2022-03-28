package com.example.demo.service.impl;

import com.example.demo.model.HomeTime;
import com.example.demo.repository.HomeTimeRepository;
import com.example.demo.service.HomeTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class HomeTimeServiceImpl implements HomeTimeService {
    @Autowired
    private HomeTimeRepository homeTimeRepository;

    @Override
    public Iterable<HomeTime> findAll() {
        return homeTimeRepository.findAll();
    }

    @Override
    public HomeTime findById(Date date) {
        return homeTimeRepository.findById(date).get();
    }

    @Override
    public void save(HomeTime homeTime) {
        homeTimeRepository.save(homeTime);
    }

    @Override
    public void remove(Date date) {
        homeTimeRepository.deleteById(date);
    }

    @Override
    public List<HomeTime> findAllByHome_Id(long id) {
        return homeTimeRepository.findAllByHome_Id(id);
    }
}
