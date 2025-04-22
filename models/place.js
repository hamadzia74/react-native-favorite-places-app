class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat: 40.748817, lng: -73.985428 }
    this.id = new Date().toString() + Math.random().toString(); // Unique ID generation
  }
}
