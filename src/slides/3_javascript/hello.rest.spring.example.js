export default (
`@RestController
public class GreetingController {

  final String template = "Hello, %s!";
  final AtomicLong counter = new AtomicLong();
  
  @RequestMapping("/greeting")
  public Greeting greeting(
    @RequestParam(value="name") String name) {

    return new Greeting(
        counter.incrementAndGet(),
        String.format(template, name)
    );
  }
}`);