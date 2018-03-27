export default (
`@Controller({ path: 'greeting' })
export class GreetingController {

  counter: number = 0;

  @Get('/:name')
  greeting(@Param() params): Greeting {
    return new Greeting(
      counter++,
      \`Hello, \${params.name}!\`
    );
  }
}
`);