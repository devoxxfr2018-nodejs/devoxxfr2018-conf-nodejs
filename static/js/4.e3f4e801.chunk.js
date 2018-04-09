webpackJsonp([4],{977:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0),a=t.n(r),l=t(122),o=(t.n(l),t(414)),c=t.n(o),i=t(999);e.default=a.a.createElement(c.a,{bgColor:"secondary",transition:["fade"],lang:"java",code:i.a,fit:!0,ranges:[{loc:[0,12],image:"assets/nest-logo.svg"},{loc:[0,12],note:"TypeScript / nest"},{loc:[14,23]},{loc:[14,25],note:"Inf\xe9rence..."},{loc:[14,26]},{loc:[27,30],note:"Interfaces \xe0 la C#"},{loc:[27,32],note:"Typage structurel"}],showLineNumbers:!0},a.a.createElement(l.Notes,null,a.a.createElement("ul",null,a.a.createElement("li",null,"annotations - decorateurs"),a.a.createElement("li",null,"typage fort - se lit de gauche \xe0 droite comme en go, scala ou kotlin"),a.a.createElement("li",null,"inf\xe9rence de type comme en Java 10"),a.a.createElement("li",null,"le compilo/transpilateur typescript check plein de choses"),a.a.createElement("li",null,"interface des m\xe9thodes mais aussi propri\xe9t\xe9s"),a.a.createElement("li",null,"typage structurel comme en go"))))},999:function(n,e,t){"use strict";e.a="@Controller({ path: 'greeting' })\nclass GreetingController {\n\n  counter: number = 0;\n\n  @Get('/:name')\n  greeting(@Param() params): Greeting {\n    return new Greeting(\n      counter++,\n      `Hello, ${params.name}!`\n    );\n  }\n}\n\nclass Greeting {\n  readonly id: number;\n  readonly content: string;\n\n  constructor(id: number, content: string) {\n    this.id = id;\n    this.content = content;\n  }\n}\n\n// inf\xe9rence\nconst greeting = new Greeting(42, \"Devoxx\");\n\n// read ONLY\ngreeting.content = \"123\"; // Error !!\n\n// interfaces mais...\ninterface Entity {\n  id: number;\n}\n\n// typage structurel\nconst entity: Entity = greeting;\n\n// d\xe9structuration\nconst { id, content } = greeting;\n\n// templates\nconst msg = `Hello ${greeting}`;\n\n// lambda\nconst myLambda = (input: string | null) => {\n  // null check\n  input.length;\n};\n\n"}});
//# sourceMappingURL=4.e3f4e801.chunk.js.map