export class Photo {

    // assigning src and likes properties 
   constructor(src: string, likes: number) {
      this.src = src;
      this.likes = likes;
   }
   src: string;
   likes: number;
}