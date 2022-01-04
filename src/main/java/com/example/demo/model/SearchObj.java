package com.example.demo.model;

import java.util.Date;

public class SearchObj {
    private String address;
    private int bedroom;
    private int showerRoom;
    private Date date;
    private double price;

    public SearchObj() {
    }

    public SearchObj(String address, int bedroom, int showerRoom, Date date, double price) {
        this.address = address;
        this.bedroom = bedroom;
        this.showerRoom = showerRoom;
        this.date = date;
        this.price = price;
    }

    public SearchObj(String address, int bedroom) {
        this.address = address;
        this.bedroom = bedroom;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getBedroom() {
        return bedroom;
    }

    public void setBedroom(int bedroom) {
        this.bedroom = bedroom;
    }

    public int getShowerRoom() {
        return showerRoom;
    }

    public void setShowerRoom(int showerRoom) {
        this.showerRoom = showerRoom;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
