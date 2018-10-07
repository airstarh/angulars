import {IfsSomeData} from "@app/app/modules/core/utils/interfaces/ifs-some-data";
import {IfsSorter}   from "@app/app/modules/core/utils/interfaces/ifs-sorter";
import {IfsPager}    from "@app/app/modules/core/utils/interfaces/ifs-pager";

export interface ifsStates {
  searchParams: IfsSomeData;
  sort: IfsSorter;
  pager: IfsPager;
  oShownFields: string[];
  fNames: string[];
}
