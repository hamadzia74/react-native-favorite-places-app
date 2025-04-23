export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // { lat: 40.748817, lng: -73.985428 }
    // this.id = new Date().toString() + Math.random().toString(); // Unique ID generation
    this.id = id;
  }
}
