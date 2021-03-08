

// Fonts & Colors //
// (pulled from Scripts/User Interface/Mosaic Editor) //
var colors = {'transparent': '#11ffee00', 'gray': '#F8F9FA'};
exports.colors = {'transparent': '#11ffee00', 'gray': '#F8F9FA'};

exports.TITLE_STYLE = {
  fontWeight: '100',
  fontSize: '32px',
  padding: '8px',
  color: '#616161',
  backgroundColor: colors.transparent,
};

exports.SUBTITLE_STYLE = {
  fontWeight: '350',
  fontSize: '22px',
  padding: '8px',
  color: '#616161',
  textAlign: 'center',
  //maxWidth: '450px',
  backgroundColor: colors.transparent,
};

exports.PARAGRAPH_STYLE = {
  fontSize: '14px',
  fontWeight: '50',
  color: '#616161',
  padding: '8px',
  whiteSpace: 'pre',
  backgroundColor: colors.transparent,
};

exports.BUTTON_STYLE = {
  fontSize: '14px',
  fontWeight: '100',
  color: '#616161',
  padding: '8px',
  backgroundColor: colors.transparent,
};

exports.SELECT_STYLE = {
  fontSize: '14px',
  fontWeight: '50',
  color: '#616161',
  padding: '2px',
  backgroundColor: colors.transparent,
  width: '80px'
};

exports.LABEL_STYLE = {
  fontWeight: '50',
  textAlign: 'center',
  fontSize: '14px',
  padding: '2px',
  backgroundColor: colors.transparent,
};

// Dictionaries for the select widgets

exports.year_list = [
    {label: '2013', value: 2013},
    {label: '2014', value: 2014},
    {label: '2015', value: 2015},
    {label: '2016', value: 2016},
    {label: '2017', value: 2017},
    {label: '2018', value: 2018},
    {label: '2019', value: 2019},
    {label: '2020', value: 2020}
  ];

exports.month_list = [
    {label: 'January (1)', value: 1},
    {label: 'February (2)', value: 2},
    {label: 'March (3)',value: 3},
    {label: 'April (4)',value:  4},
    {label: 'May (5)',value:  5},
    {label: 'June (6)',value:  6},
    {label: 'July (7)',value:  7},
    {label: 'August (8)',value:  8},
    {label: 'September (9)',value: 9},
    {label: 'October (10)',value: 10},
    {label: 'November (11)',value: 11},
    {label: 'December (12)',value: 12}
  ];

exports.day_list = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3',value:  3},
    {label: '4',value:  4},
    {label: '5',value:  5},
    {label: '6',value:  6},
    {label: '7',value:  7},
    {label: '8',value:  8},
    {label: '9',value:  9},
    {label: '10',value: 10},
    {label: '11',value: 11},
    {label: '12',value: 12},
    {label: '13',value: 13},
    {label: '14',value: 14},
    {label: '15',value: 15},
    {label: '16',value: 16},
    {label: '17',value: 17},
    {label: '18',value: 18},
    {label: '19',value: 19},
    {label: '20',value: 20},
    {label: '21',value: 21},
    {label: '22',value: 22},
    {label: '23',value: 23},
    {label: '24',value: 24},
    {label: '25',value: 25},
    {label: '26',value: 26},
    {label: '27',value: 27},
    {label: '28',value: 28},
    {label: '29',value: 29},
    {label: '30',value: 30},
    {label: '31',value: 31},
  ];



exports.collection_list = [
    {label: 'Sentinel Level-2A (Surface Reflectance) ', value: 'COPERNICUS/S2_SR'},
    {label: 'Sentinel Level-1C (Top-of-Atmosphere Reflectance) ', value: 'COPERNICUS/S2'}
  ];
  
  
exports.reducer_graph_list = [
    {label: 'Mean',   value: 0, object: ee.Reducer.mean()},
    {label: 'MinMax', value: 1, object: ee.Reducer.minMax()},
    {label: 'StdDev', value: 2, object: ee.Reducer.stdDev()}
  ];
  
  
exports.polygon_list = [
    {label: 'Full Orchard', value: 0, object: fullOrchard},
    {label: 'Fuji',         value: 1, object: fuji},
    {label: 'Gala',         value: 2, object: gala},
    {label: 'Golden',       value: 3, object: golden},
    {label: 'Granny',       value: 4, object: granny}
  ];  
exports.index_list = [
    {label: 'NDVI', value:'NDVI'},
    {label: 'EVI', value: 'EVI'}
  ];
  
