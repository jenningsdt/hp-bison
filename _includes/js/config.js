var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  occurrence: {
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": ["US", "UM", "AS", "FM", "GU", "MH", "MP", "PR", "PW", "VI"]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    },
    highlightedFilters: ['taxonKey', 'occurrenceStatus', 'gadmGid', 'year', 'datasetName', 'occurrenceIssue', 'datasetKey']
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['US', 'UM', 'AS', 'FM', 'GU', 'MH', 'MP', 'PR', 'PW', 'VI']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['US', 'UM', 'AS', 'FM', 'GU', 'MH', 'MP', 'PR', 'PW', 'VI']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};
