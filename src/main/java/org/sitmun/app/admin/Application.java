package org.sitmun.app.admin;

import org.sitmun.plugin.core.annotation.SitmunApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Import;

import springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Import(SpringDataRestConfiguration.class)
@SitmunApplication
public class Application {
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}
