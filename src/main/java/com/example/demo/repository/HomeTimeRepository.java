package com.example.demo.repository;

import com.example.demo.model.HomeTime;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface HomeTimeRepository extends JpaRepository<HomeTime, Date> {
}
