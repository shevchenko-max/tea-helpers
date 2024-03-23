# helper functions

You are free to choose any of the following methods to implement functionality with the helper functions.

isObject (obj) -> bool

msToHours (ms) -> float

msToMinutes (ms) -> float

msToDays (ms) -> float

daysToMs (hours) -> int

hoursToMs (minutes) -> int

calculateTimeDiffInMinutes (seconds) -> int

calculateTimeDiffInDays (ms) -> str

transformStringToBase64 (str) -> str

removeDateSeconds (date) -> date

arrayToTree (arr) -> dict

isArraysContentSame (arr1, arr2) -> bool

transformArrayOfNumbers (arr) -> number[]

isAllowedLanguage (str) -> bool

transformArrayOfStrings (arr) -> str[]

transformEmptyStringToNull (str) -> str

wait (ms) -> void

isValidUrl (url) -> bool

transformExcelDateToTimestamp (date) -> int

transformFromCents (cents) -> float

transformToCents (dollars) -> int

transformToInt (str) -> int

transformToFloat (str) -> float

quoteQuery (str) -> str

capitalizeLetters (str) -> str

swapObject (obj) -> obj

Each (collection, iteratee) -> void
Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

EachRight (collection, iteratee) -> void
This method is like Each except that it iterates over elements of collection from right to left.

Map (collection, iteratee) -> array
Creates an array of values by running each element in collection through iteratee. The iteratee is invoked with three arguments: (value, index|key, collection).

Filter (collection, iteratee) -> array
Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

Every (collection, iteratee) -> bool
Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

Some (collection, iteratee) -> bool
Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).

Push (collection, value) -> void
Adds value to the end of collection.

Reduce (collection, iteratee, accumulator) -> any
Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value.
