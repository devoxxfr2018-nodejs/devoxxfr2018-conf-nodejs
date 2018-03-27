export default (
`@Controller({ path: 'greeting' })
class GreetingController {

  counter: number = 0;

  @Get('/:name')
  greeting(@Param() params): Greeting {
    return new Greeting(
      counter++,
      \`Hello, \${params.name}!\`
    );
  }
}

class Greeting {
  readonly id: number;
  readonly content: string;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
  }
}

const greeting = new Greeting(42, "Devoxx");
greeting.content = "123"; // Error !!

interface Entity {
    id: number
}

const entity: Entity = greeting;
`);