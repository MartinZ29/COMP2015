class Book {
	constructor(title, author, yearPublished) {
		this.title = title;
		this.author = author;
		this.yearPublished = yearPublished;
	}

	readBook() {
		return (
			this.title +
			' was written by ' +
			this.author +
			' published in ' +
			this.yearPublished +
			'.'
		);
	}
}

let JS = new Book('JavaScript & jQuery', 'David Sawyer McFarland', 2007);

let questionSeven = function() {
	return JS;
};
