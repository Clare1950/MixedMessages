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


let book1 = bookFactory(
  "Slime: A Natural History",
  "Susanne Wedlich",
  "Popular Science",
  272
);
let podcast1 = podcastFactory(
  "The Trojan Horse Affair",
  "Brain Reed & Hamza Syed",
  "Spotify",
  8,
  50
);
let series1 = seriesFactory("Crossfire", "Drama", "BBC iPLayer", 3, 55);

