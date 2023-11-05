export class Album {
    constructor(
        public name: string,
        public artist: string,
        public year: number,
        public content: string,
        public cover: string,
        public id: number|string
    ) {
    }
  }

  export class PositionAlbum {
    transform: string;
    zIndex: number;
    filter: string;

    constructor(posX:number,posY:number,zIndex:number,blurCover:number) {
      this.transform = `translate(${posX}em,${posY}em)`;
      this.zIndex = zIndex;
      this.filter = `blur(${blurCover}px)`;
    }
  }