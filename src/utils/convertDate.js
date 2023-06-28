import moment from 'moment';

export const convertDate = date => {
  return moment(date).format('MMM DD YYYY');
};
