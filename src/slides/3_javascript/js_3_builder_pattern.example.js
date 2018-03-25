export default (
`type Cover = {
  id: string;
  type: CoverType;
  locations: Location[];
  limits: Limit[];
  deductibles: Deductible[];
  // other properties
};

const medicalExpensesCover = {
  id: uuid.v4(),
  type: MEDICAL_EXPENSES_COVER_TYPE,
  locations: [WHOLE_WORLD],
  limits: [{value: 11000, currency: 'EUR'}],
  deductible: [],
  // other required properties
};

const medicalExpensesCover = new CoverBuilder()
  .type(MEDICAL_EXPENSES_COVER_TYPE)
  .limits(
    new LimitBuilder()
      .value(11000)
      .currency('EUR')
      .build()
  )
  .build();

export class CoverBuilder {
  id: string = uuid.v4();
  type: CoverType = REPATRIATION_COVER_TYPE;
  locations: Location[] = [WHOLE_WORLD];
  limits: Limit[] = [];
  deductibles: Deductible[] = [];
  // ...

  id(id: string): this {
    this.id = id;
    return this;
  }

  type(type: CoverType): this {
    this.type = type;
    return this;
  }

  locations(...locations: Location[]): this {
    this.locations = locations;
    return this;
  }

  limits(...limits: Limit[]): this {
    this._limits = limits;
    return this;
  }

  deductibles(...deductibles: Deductible[]): this {
    this._deductibles = deductibles;
    return this;
  }
  // ...

  build(): Cover {
    return {
      id: this.id,
      type: this.type,
      locations: this.locations,
      limits: this.limits,
      deductibles: this.deductibles,
      // ...
    };
  }
}

function aCover(coverShape: $Shape<Cover>): Cover {
  const defaultCover = {
    id: uuid.v4(),
    type: REPATRIATION_COVER_TYPE,
    locations: [WHOLE_WORLD],
    limits: [],
    deductible: [],
    // other required properties
  };
  return {
    ...defaultCover,
    ...coverShape,
  };
};

const medicalExpensesCover = aCover({
  type: MEDICAL_EXPENSES_COVER_TYPE,
  limits: [{
    value: 11000,
    currency: 'EUR',
  }],
});
`
);
