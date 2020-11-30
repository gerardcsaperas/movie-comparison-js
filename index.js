/*
1. Fetch data from OMDb API dinamically, so the user can see a list of the available movies for a certain input while typing.

Show movie titles and poster miniatures.
*/

// 1. Get user input element from the DOM
const inputElementOne = document.getElementById('input-one');

// 2. Create a function in order to fetch data according to our current input. The function will only start fetching once the user has stopped typing for 0,5 seconds. That way, we will prevent from making too many fetch requests in a given day.
const fetchData = async(movie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'aa318d5',
            s: movie
        }
    });

    console.log(response);
};

// Bonus: create a variable to store timeoutId in order to fetch after the user stopped typing.
let timeoutId;

// 3. Create a function in order to update input changes.
const fetchInputOne = (e) => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fetchData(e.target.value), 500);
};

// 6. Listen for input changes inside the target element and call the bundle function.
inputElementOne.addEventListener('input', fetchInputOne);

/*
2. Once either (1) a name of a movie is clicked, (2) 'search' button is clicked or (3) enter key is pressed, give full information for a given movie.
*/

/*
2.2 If the user clicks outside of the input, stop fetching data for movies names and posters.
*/