import { Controller, Get } from "@nestjs/common";

// set up base route for some entity
@Controller("/app")
export default class AppController {
  @Get("/root") // set up the sub route
  getRootRoute() {
    return "I am the root route - refactored";
  }
}
