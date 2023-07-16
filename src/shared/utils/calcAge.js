export default function calcAge(date) {
    let today = new Date();
    let birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();

    let month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
      }

    return age;
}