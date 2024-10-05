import { IFilterOptions } from '../interfaces/filter-options.interface';
import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';

const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);

  return filteredList;
};

const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  if (name === undefined) return usersList;

  return usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLocaleLowerCase())
  );
};

const filterUsersListByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  if (startDate === undefined || endDate === undefined) return usersList;

  return usersList.filter((user) =>
    isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    })
  );
};

const filterUsersListByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  if (status === undefined) return usersList;

  return usersList.filter((user) => user.ativo === status);
};

export { filterUsersList };
