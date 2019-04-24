import React from 'react';
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Table from '../common/Table';

const mockColumns = [
  { title: '№', dataIndex: 'a', key: 'a'},
  { title: 'ИИН пациента', dataIndex: 'b', key: 'b'},
  { title: 'Дата и время приема', dataIndex: 'c', key: 'c'},
  { title: 'Статус', dataIndex: 'c', key: 'd'},
  {
    title: '',
    dataIndex: '',
    key: 'e',
    render() {
      return (
        <Button variant="contained" color="primary" size="small">
          Подробнее
        </Button>
      );
    },
  },
];

const mockData = [
  { a: '123', key: '1' },
  { a: 'cdd', b: 'edd', key: '2' },
  { a: '1333', c: 'eee', d: 2, key: '3' },
];

function renderTitle({ status, handleAlignment }) {
  return (
    <Grid container justify="space-between" alignItems="center" style={{ padding: '0 6px' }}>
      <ToggleButtonGroup value={status} exclusive onChange={handleAlignment}>
        <ToggleButton value="all">Все</ToggleButton>
        <ToggleButton value="inProgress">На согласовании</ToggleButton>
        <ToggleButton value="sent">Отправлено на пересъемку</ToggleButton>
        <ToggleButton value="finished">Завершен</ToggleButton>
      </ToggleButtonGroup>
      <div>
        <Input />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </Grid>
  );
}

export default function ResearchJournalTable() {
  const [status, setStatus] = React.useState('all');
  function handleAlignment(_e, newStatus) {
    setStatus(newStatus);
  }
  return (
    <Table
      data={mockData}
      columns={mockColumns}
      title={() => renderTitle({ status, handleAlignment })}
    />
  );
}
