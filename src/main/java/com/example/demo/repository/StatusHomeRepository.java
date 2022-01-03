package com.example.demo.repository;

import com.example.demo.model.StatusHome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusHomeRepository extends JpaRepository<StatusHome, Long> {
    StatusHome findByName(String name);
}
