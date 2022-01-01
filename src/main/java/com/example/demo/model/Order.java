package com.example.demo.model;

import javax.persistence.*;
import java.util.Date;
@Entity(name = "order1")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date bookingDate;
    private Date startDate;
    private Date endDate;

    public Order() {
    }

    public Order(Long id, Date bookingDate, Date startDate, Date endDate) {
        this.id = id;
        this.bookingDate = bookingDate;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
