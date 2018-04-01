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

// inférence
const greeting = new Greeting(42, "Devoxx");

// read ONLY
greeting.content = "123"; // Error !!

// interfaces mais...
interface Entity {
  id: number;
}

// typage structurel
const entity: Entity = greeting;

// déstructuration
const { id, content } = greeting;

// templates
const msg = \`Hello \${greeting}\`;

// lambda
const myLambda = (input: string | null) => {
  // null check
  input.length;
};

`);