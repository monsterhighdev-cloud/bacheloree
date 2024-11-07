const distanceCalc = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const toRadians = (degree) => degree * (Math.PI / 180); // Converts degrees to radians

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in km
};

export default distanceCalc;
