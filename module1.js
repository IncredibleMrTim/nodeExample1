exports.getSeason = seasonId => {
  var season;

  switch (parseInt(seasonId)) {
    case 1:
      season = "Winter";
      console.warn(1);
      break;
    case 2:
      season = "Spring";
      console.warn(2);
      break;
    case 3:
      season = "Summer";
      console.warn(3);
      break;
    case 4:
      season = "Autumn";
      console.warn(4);
      break;
    default:
      season = "no season defined";
  }

  return {
    season: {
      name: season
    }
  };
};

exports.getUser = () => {
  return {
    custom: {},
    dob: "string",
    email: "string",
    emailOptIn: "string",
    externalReferenceId: "string",
    facebookId: "string",
    firstName: "string",
    gender: "string",
    lastName: "string",
    leaderboardAlias: "string",
    loginId: "string",
    mobilePhone: "string",
    nonMemberPolicies: [
      {
        drivers: [{}],
        policyNumber: "string"
      }
    ],
    optInInsuranceQuotes: true,
    optInPrivateLeaderboard: true,
    optInPublicLeaderboard: true,
    optInUBI: true,
    policies: [
      {
        otherDrivers: [{}],
        policyNumber: "string",
        vehicles: [
          {
            licensePlateNo: "string",
            make: "string",
            model: "string",
            primaryDriverTelematicsId: "string",
            year: 0
          }
        ]
      }
    ],
    postCode: "string",
    realm: "string",
    region: "string",
    telematicsId: "string",
    type: "string",
    vrm: "string"
  };
};
