/* eslint-disable @typescript-eslint/no-unused-vars */
import { XMLAttribute, XMLChild, XMLElement } from 'xml-decorators';

const HOBBY_NS = 'h';

export class Hobby {

  @XMLAttribute({ namespace: HOBBY_NS })
  private name: string;

  @XMLAttribute({ namespace: HOBBY_NS })
  private description: string;
}

const PERSON_ROOT = 'person';
const PERSON_NS = 'ps';

@XMLElement({ root: PERSON_ROOT }) // optional
export class Person {

  @XMLAttribute({ namespace: PERSON_NS })
  private firstname: string;

  private lastname: string;

  @XMLAttribute({ namespace: PERSON_NS })
  get fullname(): string {

    return this.firstname + ' ' + this.lastname;
  }

  @XMLAttribute({ namespace: PERSON_NS })
  private age: number;

  @XMLChild({
    namespace: PERSON_NS,
    name: 'hobby'
  })
  private hobbies: Hobby[];

  @XMLChild({
    namespace: PERSON_NS,
    stripPluralS: true
  })
  private friends: Person[];

  @XMLChild({
    name: 'pet',
    implicitStructure: 'pets.$'
  })
  private pets: string[];

}