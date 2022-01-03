package com.example.demo.controller;

import com.example.demo.model.Admin;
import com.example.demo.model.Comment;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.service.AdminServiceImpl;
import com.example.demo.service.CommentServiceImpl;
import com.example.demo.service.RoleService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin("*")
@PropertySource("classpath:application.properties")
@RequestMapping("/api/admins")
public class AdminRestController {
    @Autowired
    private AdminServiceImpl adminService;

    @Autowired
    private UserService userService;

    @Autowired
    private RoleService roleService;

    @Autowired
    private CommentServiceImpl commentService;

    @GetMapping("")
    public ResponseEntity<Iterable<Admin>> findAllAdmin() {
        Iterable<Admin> admins = adminService.findAll();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> findAdminById(@PathVariable Long id) {
        Optional<Admin> admin = adminService.findById(id);
        if (!admin.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(admin.get(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Admin> save(@RequestBody Admin admin) {
        Role role = roleService.findByName("ROLE_ADMIN");
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        admin.setRoles(roles);
        adminService.save(admin);
        return new ResponseEntity<>(admin, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> edit(@PathVariable Long id, @RequestBody Admin admin) {
        Optional<Admin> adminOptional = adminService.findById(id);
        admin.setId(adminOptional.get().getId());
        adminService.save(admin);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<Iterable<Admin>> findByAdminContaining(@PathVariable String name) {
        Iterable<Admin> admins;
        if (name == null) {
            admins = adminService.findAll();
        } else {
            admins = adminService.findAllByAccountContaining(name);
        }
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @GetMapping("/admin/{idAdmin}/user/{idUser}")
    public ResponseEntity deleteUser(@PathVariable Long idAdmin, @PathVariable Long idUser) {
        User user = userService.findById(idUser).get();
        user.setStatus(0);
        userService.save(user);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    @GetMapping("/admin/{idAdmin}/comment/{idComment}")
    public ResponseEntity deleteComment(@PathVariable Long idAdmin, @PathVariable Long idComment) {
        Comment comment = commentService.findById(idComment).get();
        commentService.remove(idComment);
        return new ResponseEntity(comment, HttpStatus.OK);
    }

}
