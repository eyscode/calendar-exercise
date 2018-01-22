# Calendar Exercise

Web-based application that displays a monthly calendar based on the following requirements:

1. Allow the user to specify three inputs: A start date, the number of days to display and a country code literal 
(the country code literal value must be defined by the user with the keyboard). e.g:
```
Start Date: 8/15/2008 
Number of days: 17 
Country Code: US
```

2. Render a calendar that spans as many weeks as necessary in order to cover the defined number of days. 
If the date range spans months, a new header needs to be created for that month. The Calendar should display its 
days starting on Sunday and ending on Saturday, as shown below. This should work with any number of days regardless of 
the years meaning that if the user specifies more than 365 days, calendars will be generated accordingly for the next year and so on.

3. The days should be color coded as follows:
    * Weekends are yellow
    * Weekdays are green
    * Holidays are orange
    * Invalid days are hidden and the background should be gray
    
    Invalid days are defines as:
    * Any days in the week previous to the Start date.
    * Any days in the week after the last rendered day.
    * Any days before the first day of the month (if the calendar spills into
      another month).
      
4. The Holidays must be dynamically extracted from the API defined at
   http://holidayapi.com holidays are only required for the year 2008.
   * This is a RESTful API, for which we expect web requests to be created and handled appropriately.
   * We also expect different result codes to be handled.