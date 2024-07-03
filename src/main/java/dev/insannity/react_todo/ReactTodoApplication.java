package dev.insannity.react_todo;

import com.vaadin.flow.component.page.AppShellConfigurator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class ReactTodoApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(ReactTodoApplication.class, args);
    }
}
