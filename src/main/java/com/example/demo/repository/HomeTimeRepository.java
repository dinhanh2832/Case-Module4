package com.example.demo.repository;

import com.example.demo.model.HomeTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface HomeTimeRepository extends JpaRepository<HomeTime, Date> {
    List<HomeTime> findAllByHome_Id(long id);
}
