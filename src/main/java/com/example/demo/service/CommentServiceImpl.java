package com.example.demo.service;

import com.example.demo.model.Comment;
import com.example.demo.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public Iterable<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Override
    public Optional<Comment> findById(Long id) {
        return commentRepository.findById(id);
    }

    @Override
    public void save(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public void remove(Long id) {
        commentRepository.deleteById(id);
    }

    @Override
    public List<Comment> findAllByContentContaining(String content) {
        return commentRepository.findAllByContentContaining(content);
    }

    @Override
    public Iterable<Comment> showCommentByNewTime(Long idH) {
        return commentRepository.showCommentByNewTime(idH);
    }

    @Override
    public Iterable<Comment> showCommentByOldTime() {
        return commentRepository.showCommentByOldTime();
    }

    @Override
    public Iterable<Comment> findCommentByHomeId(Long id) {
        return commentRepository.findCommentByHomeId(id);
    }

}
