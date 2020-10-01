import * as React from 'react';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Omit } from 'antd/lib/_util/type';
import { Dayjs } from 'dayjs';
import DatePicker from '../DatePicker';

export interface TimePickerProps
  extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}

/**
 * Ant Design TimePciker
 *
 * - moment.js를 date-fns로 교체
 */
const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
