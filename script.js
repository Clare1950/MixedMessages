//A factory function for the book object

const bookFactory = (title, author, genre, pages) => {
  return {
    title: title,
    author: author,
    genre: genre,
    pages: pages,
    length() {
      if (this.pages <= 200) {
        return "short";
      } else if (this.pages > 500) {
        return "long";
      } else {
        return "medium length";
      }
    },
    bookSummary() {
      return `Read ${this.title}, a ${this.genre} book by ${
        this.author
      }. \nIt is a ${this.length()} read with ${this.pages} pages.`;
    },
  };
};

// Podcast Factory Function
const podcastFactory = (title, creator, platform, episodes, episodeLength) => {
  return {
    title: title,
    creator: creator,
    platform: platform,
    episodes: episodes,
    episodeLength: episodeLength,
    totalTime() {
      return this.episodes * this.episodeLength;
    },
    podcastSummary() {
      return `Listen to ${this.title}, created by ${
        this.creator
      }. \nIt is a ${this.totalTime()} minute total listen and you can find it on ${
        this.platform
      }.`;
    },
  };
};

// series factory function
const seriesFactory = (title, genre, platform, episodes, episodeLength) => {
  return {
    title: title,
    genre: genre,
    platform: platform,
    episodes: episodes,
    episodeLength: episodeLength,
    totalTime() {
      return this.episodes * this.episodeLength;
    },
    seriesSummary() {
      return `Watch ${this.title}, a ${this.genre} series you can find on ${
        this.platform
      }. \n${this.title} has a ${this.totalTime()} minute total watch time.`;
    },
  };
};
//populate books array with books
let books = [];

books.push(
  bookFactory(
    "Slime: A Natural History",
    "Susanne Wedlich",
    "Popular Science",
    272
  )
);

books.push(
  bookFactory(
    "Manifesto: On Never Giving Up",
    "Bernadine Evaristo",
    "Biography",
    190
  )
);

books.push(
  bookFactory("The Book of Form and Emptiness", "Ruth Ozeki", "Fiction", 546)
);

books.push(bookFactory("Shuggie Bain", "Douglas Stuart", "Fiction", 430));

books.push(
  bookFactory("The Marriage Portrait", "Maggie O'Farrell", "Fiction", 432)
);

books.push(bookFactory("The Glass Palace", "Amitav Ghosh", "Fiction", 547));

books.push(
  bookFactory(
    "In Extremis: The life of a War Corespondant",
    "Lindsey Hilsum",
    "Biography",
    375
  )
);

books.push(bookFactory("Celestial Bodies", "Jokha Alharthi", "Fiction", 243));

books.push(
  bookFactory(
    "Unthinkable: An Extraordinary Journey Through the World's Strangest Brains",
    "Helen Thomson",
    "Science",
    265
  )
);

books.push(bookFactory("Ghana Must Go", "Taiye Selasi", "Fiction", 318));

books.push(
  bookFactory("A Long Petal of the Sea", "Isabel Allende", "Fiction", 314)
);

books.push(bookFactory("If it Bleeds", "Stephen King", "Fiction", 389));

books.push(
  bookFactory("The Architect's Apprentice", "Elif Shafak", "Fiction", 454)
);
//populate podcast array with podcasts
let podcasts = [];
podcasts.push(
  podcastFactory(
    "The Trojan Horse Affair",
    "Brain Reed & Hamza Syed",
    "Spotify",
    8,
    50
  )
);
podcasts.push(
  podcastFactory("The Superhero Complex", "Novel", "Spotify", 10, 52)
);
podcasts.push(
  podcastFactory(
    "Wild Things: Seigfried and Roy",
    "Stephen Leckhart",
    "Spotify",
    8,
    42
  )
);
podcasts.push(
  podcastFactory("28ish Days Later", "India Rakusen", "BBC Sounds", 28, 14)
);
podcasts.push(
  podcastFactory(
    "Ki & Dee: The Podcast",
    "Chiara Hunter & Diana Vickers",
    "Spotify",
    14,
    50
  )
);
podcasts.push(
  podcastFactory("Run Bambi Run", "Vanessa Grigoridas", "Spotify", 11, 35)
);

podcasts.push(
  podcastFactory(
    "The Antidote",
    "Amy Aniobi & Grace Edwards",
    "Spotify",
    29,
    50
  )
);

podcasts.push(
  podcastFactory(
    "HeidiWorld: The Heidi Fleiss Story",
    "iHeartPodcasts",
    "Spotify",
    10,
    70
  )
);

podcasts.push(
  podcastFactory(
    "Unreal: A Critical History of Reality TV",
    "Pandora Sykes & Sirin Kale",
    "BBC Sounds",
    10,
    52
  )
);

podcasts.push(
  podcastFactory("BEING Trans", "Pandora Sykes & Sirin Kale", "Spotify", 7, 58)
);

//populate series array
const series = [];
series.push(seriesFactory("Crossfire", "Drama", "BBC iPLayer", 3, 55));

series.push(seriesFactory("Shetland", "Drama", "BBC iPLayer", 6, 57));

series.push(seriesFactory("Marriage", "Drama", "BBC iPLayer", 4, 57));

series.push(seriesFactory("The Control Room", "Drama", "BBC iPlayer", 3, 57));

series.push(seriesFactory("The Handmaid's Tale", "Drama", "All 4", 10, 55));

series.push(seriesFactory("Arctic Circle", "Drama", "All 4", 10, 42));

series.push(seriesFactory("Nine Perfect Strangers", "Drama", "All 4", 6, 42));

series.push(seriesFactory("Astrid, Murder in Paris", "Drama", "All 4", 6, 52));

series.push(seriesFactory("Inventing Anna", "Drama", "Netflix", 9, 60));

// Create random number generator function

const randomNumber = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

let mixedMessage = `This month you should: \n\n${series[
  randomNumber(series)
].seriesSummary()}\n\n${books[randomNumber(books)].bookSummary()}\n\n${podcasts[
  randomNumber(podcasts)
].podcastSummary()}`;

console.log(mixedMessage);
