package com.example.demo.service;


import com.example.demo.model.HomeTime;

import java.util.Date;
import java.util.List;

public interface HomeTimeService {
    Iterable<HomeTime> findAll();

    HomeTime findById(Date date);

    void save(HomeTime homeTime);

    void remove(Date date);

    List<HomeTime> findAllByHome_Id(long id);
}
