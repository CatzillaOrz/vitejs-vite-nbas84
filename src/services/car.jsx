export const getCars = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: ['car001', 'car002', 'raceCar001', 'blueCar', 'redCar', 'lambergini', 'BMW', 'Cayan', 'RoadCruiser','LanderCruiser']})
        }, 1000);
    })
}