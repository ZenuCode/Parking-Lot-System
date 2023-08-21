export interface Ticket {
    entrance?: number;
    license?: string;
    size?: string;
    ticketId?: number;
    entryTime: Date;
    exitTime: Date;
    parkFloor: number; //Parking Space id: F1S3 (Floor, Space)
    parkSpace: number;
}

export interface ParkingInfo {
    parkFloor: number;
    smallCar: number;
    middleCar: number;
    largeCar: number;
    floorTickets: Ticket[];
}
