export type Holiday = {
  nameEn: string
  nameFr: string
  date: string
}

export type Province = {
  id?: string
  nameEn: string
  sourceEn: string
  holidays: Holiday[]
  nextHoliday: Holiday
}
